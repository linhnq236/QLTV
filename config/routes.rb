Rails.application.routes.draw do
  resources :books
  resources :publishers
  resources :types
  resources :authors
  mount Ckeditor::Engine => '/ckeditor'
  resources :studytimes
  scope "(:locale)", locale: /en|vn/ do
    resources :equipment
    get "/controller_equipment" => "equipment#index"
    get "/new_equipment" => "equipment#new"
    devise_for :users
    root to: "equipment#index"
    namespace "api" do
      resources :equipment
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
