ActiveAdmin.register Text do

  form do |f|
    f.inputs do
      f.input :text, as: :text
      f.input :tag, as: :select, collection: Text.tags.values
      f.input :language, as: :select, collection: Text.languages.values
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :text
    column :tag
    column :language
    actions
  end

  permit_params do
    permitted = [:text, :tag, :language]
    permitted
  end
end
