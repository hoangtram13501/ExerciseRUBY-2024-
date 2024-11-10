class AddWallIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :wall_id, :string
  end
end
