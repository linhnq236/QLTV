require 'test_helper'

class HistoryallsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @historyall = historyalls(:one)
  end

  test "should get index" do
    get historyalls_url
    assert_response :success
  end

  test "should get new" do
    get new_historyall_url
    assert_response :success
  end

  test "should create historyall" do
    assert_difference('Historyall.count') do
      post historyalls_url, params: { historyall: { active: @historyall.active, staff_id: @historyall.staff_id, value_new: @historyall.value_new, value_old: @historyall.value_old } }
    end

    assert_redirected_to historyall_url(Historyall.last)
  end

  test "should show historyall" do
    get historyall_url(@historyall)
    assert_response :success
  end

  test "should get edit" do
    get edit_historyall_url(@historyall)
    assert_response :success
  end

  test "should update historyall" do
    patch historyall_url(@historyall), params: { historyall: { active: @historyall.active, staff_id: @historyall.staff_id, value_new: @historyall.value_new, value_old: @historyall.value_old } }
    assert_redirected_to historyall_url(@historyall)
  end

  test "should destroy historyall" do
    assert_difference('Historyall.count', -1) do
      delete historyall_url(@historyall)
    end

    assert_redirected_to historyalls_url
  end
end
