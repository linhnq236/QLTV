require 'dino'
namespace :equipment do
  task :hello => :environment do
    Rake::Task["equipment:getPort"].invoke
    board = Dino::Board.new(Dino::TxRx.new)
    led1 = Dino::Components::Led.new(pin: 13, board: board)
    led1.send(:on)
   end
  task :listall => :environment do
      puts User.all
  end
  task :getPort => :environment do
    board = Dino::Board.new(Dino::TxRx.new)
    led2 = Dino::Components::Led.new(pin: 14, board: board)

    # [:on, :off].cycle do |a|
      led2.send(:on)
      # sleep 0.1
    # end
  end
end
