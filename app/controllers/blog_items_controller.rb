class BlogItemsController < ApplicationController
  def index
    blogs = BlogItem.all
    render json: blogs
  end

  def new
    @blog = BlogItem.new
  end

  def create
    @blog = BlogItem.new(blog_params)
    
    if @blog.save
      
    else
      render :new
    end
  end

  def show
    blog = BlogItem.find(params[:id])

    render json: blog
  end

  def update
    blog = BlogItem.find(params[:id])
    
    if blog.update(blog_params)
      render json: blog
    else
      render json: { error: blog.errors.messages }, status: 422
    end
  end

  def blog_params
    params.require(:blog_item).permit(:author, :title, :subtitle, :text, :image_description, :image)
  end
end
