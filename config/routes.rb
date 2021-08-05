Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :texts, only: %i[create index show update destroy]
  resources :blog_items, only: %i[create index show update destroy]
  
  root to: 'home#index'
  get '*path', to: 'home#index', via: :all
end
