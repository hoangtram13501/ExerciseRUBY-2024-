class AddDetailToBook < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :price, :integer
  end
end
