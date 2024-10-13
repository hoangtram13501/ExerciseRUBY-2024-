Rails.application.routes.draw do
  root 'users#index'
  
  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]
end
