module Api 
    class UsersController < ApplicationController
        def show
            user=User.find(params[:id])

            respond_to do | format |
                format.json do
                    render json: user.to_json, status: :ok
                end
            end
        end
    end
end

