Rails.application.routes.draw do
  root 'users#index'
  
  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index destroy]
      resources :sessions do
        collection do
          post 'login', to: 'sessions#create'
          post 'login', to: 'sessions#create'
          delete '/logout', to: 'sessions#destroy'
        end
      end
    end
  end
end
