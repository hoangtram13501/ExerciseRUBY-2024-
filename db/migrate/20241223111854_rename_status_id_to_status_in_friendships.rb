class RenameStatusIdToStatusInFriendships < ActiveRecord::Migration[7.0]
  def change
    rename_column :friendships, :status_id, :status
  end
end
