class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :subheading
      t.text :summary
      t.text :full_text
      t.string :thumb
      t.datetime :start_at
      t.belongs_to :category, index: true

      t.timestamps null: false
    end
  end
end
