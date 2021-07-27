class TextsController < ApplicationController
  def index
    texts = Text.all
    render json: TextSerializer.new(texts).serialized_json
  end

  def new
    @text = Text.new
  end

  def create
    @text = Text.new(text_params)
    
    if @text.save
      
    else
      render :new
    end
  end

  def show
    text = Text.find(params[:id])

    render json: TextSerializer.new(text).serialized_json
  end

  def update
    text = Text.find(params[:id])
    
    if text.update(text_params)
      render json: TextSerializer.new(text).serialized_json
    else
      render json: { error: text.errors.messages }, status: 422
    end
  end

  def text_params
    params.require(:text).permit(:text, :tag, :language)
  end
end
