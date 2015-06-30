module Api::V1
  class EventsController < ApiController
    def index
      unless params.has_key?("category_id")
        render :status => 400, :text => "400 Bad Request"
      end

      limit  = params[:limit]  || 5
      offset = params[:offset] || 0

      q = Event.where(category_id: params[:category_id])

      if limit.to_i == 0
        @events = q
      else
        @events = q.offset(offset).limit(limit)
      end
    end

    def show
      @event = Event.find(params[:id])
    rescue
      render :status => 404, :text => "404 Not found"
    end
  end
end
