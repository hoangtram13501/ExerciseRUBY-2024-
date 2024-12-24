class CreateFriendships < ActiveRecord::Migration[7.0]
  def change
    create_table :friendships do |t|
      t.integer :user_id,  null: false
      t.integer :friend_id,  null: false
      t.string :status_id,  null: false, default: "pending"

      t.timestamps
    end
  end
end
