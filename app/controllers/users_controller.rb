class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    #user = User.find_or_create_by(email: login)
  end
end
