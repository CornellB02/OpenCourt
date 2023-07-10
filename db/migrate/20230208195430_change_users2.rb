class ChangeUsers2 < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :password_digest, :string
    # change_column_null :users, :password_digest, false 
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
