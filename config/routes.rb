Rails.application.routes.draw do
  root 'users#index'
  
  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index,new,create,destroy]
      devise_for :users, controllers: {
        sessions: "api/v1/sessions"
      }
      resources :posts, only: %i[index create]
      resources :comments, only: %i[create]
    end
  end
end
