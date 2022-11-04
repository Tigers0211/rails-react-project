class TeamsController < ApplicationController
    def index
        render json: Team.all , status: :ok
    end

    def create
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    def show 
        team = find_team
        render json: team, status: :ok
    end

    def update
        team = find_team
        team.update!(team_params)
        render json: team, status: :ok
    end

    def destroy
        team = find_team
        team.destroy
        head :no_content
    end

    private

    def team_params
        params.permit(:team_name, :user_id, :league_id)
    end

    def find_team
        Team.find(params[:id])
    end
end
