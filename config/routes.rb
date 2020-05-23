Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :messages
  mount Ckeditor::Engine => '/ckeditor'
  resources :users
  get "profile", to: "users#edit"
  post "update", to: "users#update"
  put "active_acc", to: "users#active_acc"
  get "listalluser", to: "users#listalluser"
  scope "(:locale)", locale: /en|vn/ do
    resources :departments
    resources :historyalls
    resources :histories
    get "historytudent", to: "histories#historystudent"
    resources :borrows
    put "accept_borrow", to: "borrows#accept_borrow"
    put "pay_book", to: "borrows#pay_book"
    get "mybook", to: "borrows#mybook"
    post "borrow_show", to: "borrows#create_by_show"
    get "borrows_book/:id", to: "borrows#index"
    resources :books
    # get "show_book/:id", to: "books#show_book"
    get "show_book_detail/:id", to: "books#show_book_detail"
    get "book_detail/:id", to: "books#book_detail"
    get "book_detail_student/:id", to: "books#book_detail_student"
    resources :publishers
    resources :types
    resources :authors
    resources :studytimes
    resources :equipment
    get "controller_equipment" => "equipment#index"
    get "new_equipment" => "equipment#new"
    root to: 'home#index'
    get "introduce", to: "home#introduce"
    devise_for :users
    get "/logout", to: "devise/registrations#destroy "
    namespace "admin" do
      root to: "equipment#index"
      resources :users
      resources :equipment
      resources :historyalls
    end
    namespace "api" do
      resources :authors
      resources :borrows
      resources :books
      resources :users
      resources :messages
      post "cart", to: "books#cart"
      post "cart_errors", to: "books#cart_errors"
      put "setpassword/:id", to: "users#setpassword"
      post "notices", to: "borrows#notices"
      post "sum_notices", to: "borrows#sum_notices"
      post "search_book", to: "books#search_book"
      post "addbook", to: "books#addbook"
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
