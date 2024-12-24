class ChangeStatusInFriendships < ActiveRecord::Migration[7.0]
  def change
    change_column :friendships, :status_id, :integer, default: 0
  end
end
