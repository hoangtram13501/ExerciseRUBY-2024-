class CreateEducations < ActiveRecord::Migration[7.0]
  def change
    create_table :educations do |t|
      t.string :school_name
      t.string :degree
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
