class LeaguesController < ApplicationController

    def index
        render json: League.all , status: :ok
    end

    def create
        league = League.create!(league_params)
        render json: league, status: :created
    end

    def show 
        league = find_league
        render json: league, status: :ok
    end

    def update
        league = find_league
        league.update!(league_params)
        render json: league, status: :ok
    end

    def destroy
        league = find_league
        league.destroy
        head :no_content
    end


private

    def league_params
        params.permit(:league_name, :commisioner_name, :favorite)
    end

    def find_league
        League.find(params[:id])
    end


end
