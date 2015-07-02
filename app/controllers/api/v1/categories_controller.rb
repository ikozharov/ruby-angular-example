module Api::V1
  class CategoriesController < ApiController
    def index
      @catrgories = Category.all
    end
  end
end
