Rails.application.routes.draw do
  root 'users#index'
  
  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index]
      devise_for :users, controllers: {
        sessions: "api/v1/sessions"
      }
    end
  end
end
