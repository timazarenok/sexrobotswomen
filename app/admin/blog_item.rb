ActiveAdmin.register BlogItem do
  form do |f|
    f.inputs do
      f.input :author
      f.input :title
      f.input :subtitle
      f.input :text, as: :text
      f.input :image_description
      f.input :image, as: :file
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :author
    column :title
    column :subtitle
    column :text
    column :image_description
    column :image
    actions
  end

  permit_params do
    permitted = [:author, :title, :subtitle, :text, :image_description, :image]
    permitted
  end
end
