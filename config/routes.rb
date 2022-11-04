Rails.application.routes.draw do
  resources :players, only: [:index, :show, :destroy, :update]
  resources :teams, only: [:create, :index, :show, :destroy, :update]
  resources :leagues, only: [:create, :index, :show, :destroy, :update]
  resources :users, only: [:create, :index, :show, :destroy, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"

  post "/login" , to: "sessions#create"

  delete "/logout" , to: "sessions#destroy"
end
