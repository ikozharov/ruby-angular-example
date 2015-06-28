module Api::V1
  class CategoriesController < ApiController
    def index
      limit  = params[:limit].to_i if params.has_key?("limit")
      offset = params[:offset].to_i if params.has_key?("offset")

      limit  ||= 5
      offset ||= 0

      @catrgories = Category.all if limit == 0
      @catrgories = Category.limit(limit).offset(offset) unless limit == 0
    end
  end
end
