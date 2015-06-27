module Api::V1
  class EventsController < ApiController

    def index
      render :json => {"name": "John", "age": 45}
    end

  end
end
