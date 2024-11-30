class ServiceBase
  def initialize(params)
    @params = params
  end

  def call
    raise "Not implemented method"
  end

  private

  attr_reader :params
end
