Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resource :posts
  get 'account/manage', to: 'accounts#manage', as: 'manage_account'
end
