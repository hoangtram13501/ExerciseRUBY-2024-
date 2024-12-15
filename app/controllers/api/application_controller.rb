class Api::ApplicationController < ActionController::API
  respond_to :json
  PER_PAGE = 5

  def success(
    code: 200,
    serialize: nil,
    objects: nil,
    message: "",
    token: nil,
    skip_meta: true
  )
    data = serialize.new(objects).serializable_hash[:data]
    data.first[:token] = token if token
    {
      status: code,
      message: message,
      data: data,
      meta: skip_meta ? "" : pagination_meta(objects)
    }
  end

  def unauthorized(message: "")
    {
      code: 401,
      message: message
    }
  end

  def page
    params[:page].nil? ? 1 : params[:page].to_i
  end
  
  private

  def pagination_meta(objects)
    {
      current_page: page,
      total_pages: objects.total_pages,
      total_count: objects.total_count,
      next_page: page == objects.total_pages ? page : page + 1,
      prev_page: page >= 1 ? page - 1 : page,
      is_last_page: page == objects.total_pages
    }
  end
end
