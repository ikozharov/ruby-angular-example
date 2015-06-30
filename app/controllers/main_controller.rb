class MainController < ApplicationController
  def index
    @catrgories = Category.all
    @users = User.all
  end
end
