Rails.application.routes.draw do
  resources :departments
  resources :historyalls
  resources :histories
  resources :borrows
  resources :books
  resources :publishers
  resources :types
  resources :authors
  mount Ckeditor::Engine => '/ckeditor'
  resources :studytimes
  scope "(:locale)", locale: /en|vn/ do
    resources :equipment
    get "controller_equipment" => "equipment#index"
    get "new_equipment" => "equipment#new"
    root to: 'home#index'
    devise_for :users
    get "/logout", to: "devise/registrations#destroy "
    namespace "api" do
      root to: "equipment#index"
      resources :equipment
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
