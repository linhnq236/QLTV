Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  resources :departments
  resources :historyalls
  resources :histories
  get "historytudent", to: "histories#historystudent"
  resources :borrows
  put "accept_borrow", to: "borrows#accept_borrow"
  put "pay_book", to: "borrows#pay_book"
  resources :users
  get "profile", to: "users#edit"
  post "update", to: "users#update"
  put "active_acc", to: "users#active_acc"
  post "borrow_show", to: "borrows#create_by_show"
  get "borrows_book/:id", to: "borrows#index"
  resources :books
  get "show_book/:id", to: "books#show_book"
  get "show_book_detail/:id", to: "books#show_book_detail"
  resources :publishers
  resources :types
  resources :authors
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
