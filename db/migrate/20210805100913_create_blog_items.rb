class CreateBlogItems < ActiveRecord::Migration[6.1]
  def change
    create_table :blog_items do |t|
      t.string :author
      t.string :title
      t.string :subtitle
      t.string :text
      t.text :image_description

      t.timestamps
    end
  end
end
