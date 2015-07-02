class MainController < ApplicationController
  def index
    catrgories = Category.where(parent_id: nil)
    @catrgories = catrgories.map { |category| get_children(category) }
    @users = User.all
  end

  private
    def get_children(category)
      children = category.children
      result = category.serializable_hash(only: [:id, :title, :subtitle])

      if children.size > 0
        result[:children] = children.map { |category| get_children(category) }
      end

      result
    end
end
