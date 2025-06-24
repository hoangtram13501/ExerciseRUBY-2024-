class CreateCommentsCreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments_create_comments do |t|

      t.timestamps
    end
  end
end
