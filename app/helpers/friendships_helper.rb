module FriendshipsHelper
  def friendship_button(user)
    friendship = current_user.friendships.where(friend_id: user.id).first

    if friendship.nil?
      content_tag(:div, class: 'd-flex align-items-center', data: { controller: 'friendship' }) do
        hidden_fields(user) +
        button_tag('#', class: 'btn btn-primary add-friend me-2', data: { action: 'click->friendship#addFriend' }) do
          content_tag(:i, "", class: "fas fa-user-plus me-2") + "Add Friend"
        end +
        button_tag( class: 'btn cancel-request btn-warning me-2 d-none',type: 'button', data: { action: 'click->friendship#cancelRequest' }) do
          content_tag(:i, "", class: "fas fa-user-times me-2") + "Cancel Friend Request"
        end
      end

    elsif friendship.status == 0
      content_tag(:div, class: 'd-flex align-items-center', data: { controller: 'friendship' }) do
        hidden_fields(user) +
        button_tag(class: 'btn cancel-request btn-warning me-2',type: 'button', data: { action: 'click->friendship#cancelRequest' }) do
          content_tag(:i, "", class: "fas fa-user-times me-2") + "Cancel Friend Request"
        end +
        button_tag('#', class: 'btn btn-primary add-friend me-2 d-none',type: 'button', data: { action: 'click->friendship#addFriend' }) do
          content_tag(:i, "", class: "fas fa-user-plus me-2") + "Add Friend"
        end
      end
    # Nếu đã là bạn bè
    elsif friendship.status == 1
      content_tag(:div, class: 'd-flex align-items-center', data: { controller: 'friendship' }) do
        hidden_fields(user) +
        safe_join([
          content_tag(:span, "Đã là bạn bè", class: "friendship-text ml-2 text-success"),
          button_tag( class: 'btn unfriend btn-danger me-2', data: { action: 'click->friendship#unFriend' }) do
            content_tag(:i, "", class: "fas fa-user-slash me-2") + "Unfriend"
          end
        ]) +
        button_tag( class: 'btn btn-primary add-friend me-2 d-none',type: 'button', data: { action: 'click->friendship#addFriend' }) do
          content_tag(:i, "", class: "fas fa-user-plus me-2") + "Add Friend"
        end
      end
    end
  end

  def hidden_fields(user)
    content_tag(:div, class: 'd-none') do
      concat hidden_field_tag('friendship[friend_id]', user.id, id: 'friend_id', data: { friendship_target: "friend_id" })
      concat hidden_field_tag('friendship[user_id]', current_user.id, id: 'user_id', data: { friendship_target: "user_id" })
    end
  end
end
