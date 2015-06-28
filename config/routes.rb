Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :users, only: :index
      resources :categories, only: [:index, :create, :update, :destroy]
      resources :events, only: [:index, :create, :update, :destroy]
    end

    root :to => redirect('/documentation/swagger/index.html')
  end

  get '*path' => 'main#index'

  root 'main#index'
end
