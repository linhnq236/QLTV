require 'dino'
namespace :equipment do
  task :hello do
    board = Dino::Board.new(Dino::TxRx.new)
    led1 = Dino::Components::Led.new(pin: 13, board: board)
    led2 = Dino::Components::Led.new(pin: 14, board: board)
    led3 = Dino::Components::Led.new(pin: 15, board: board)

    led1.send(:on)
    led2.send(:on)
   end
  task :listall => :environment do
      puts User.all
  end
end
