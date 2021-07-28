class TextSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :tag, :language
end
