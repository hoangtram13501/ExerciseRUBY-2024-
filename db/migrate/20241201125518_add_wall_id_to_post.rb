class AddWallIdToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :wall_id, :string
  end
end
