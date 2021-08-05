class BlogItemSerializer < ActiveModel::Serializer  
  include Rails.application.routes.url_helpers
  attributes :author, :title, :subtitle, :text, :image_description, :image, :created_at
  
  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image, only_path: true)
      }
    end
  end
end
