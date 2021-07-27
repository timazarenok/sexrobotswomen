class CreateTexts < ActiveRecord::Migration[6.1]
  def change
    create_table :texts do |t|
      t.string :text
      t.string :tag
      t.string :language

      t.timestamps
    end
  end
end
