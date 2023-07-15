class ChangePartySizeInReservs < ActiveRecord::Migration[7.0]
  def change
    change_column :reservs, :party_size, :bigint, null: true
  end
end
