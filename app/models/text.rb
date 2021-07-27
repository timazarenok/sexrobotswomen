class Text < ApplicationRecord
  enum tags: { blog: "blog", what_we_do: "what we do" }
  enum languages: { de: "de", en: "en"}

  after_create :change_json
  after_create :delete_old
  after_update :change_json

  private 

  def delete_old
    if Text.all.where(tag: self.tag, language: self.language).count > 1
      Text.all.where(tag: self.tag, language: self.language).first.delete
    end
  end

  def change_json
    json = JSON.parse(File.read("app/assets/locales/"+self[:language]+"/translation.json"))
    json[self[:tag]]["text"] = self.text
    File.write("app/assets/locales/"+self[:language]+"/translation.json", json.to_json) 
  end
end
