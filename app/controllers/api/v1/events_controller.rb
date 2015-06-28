module Api::V1
  class EventsController < ApiController
    def index
      limit  = params[:limit].to_i if params.has_key?("limit")
      offset = params[:offset].to_i if params.has_key?("offset")

      limit  ||= 5
      offset ||= 0

      @events = Event.all if limit == 0
      @events = Event.limit(limit).offset(offset) unless limit == 0
    end

    def show
      @event = Event.find(params[:id])
    rescue
      render :status => 404, :text => "404 Not found"
    end
  end
end
