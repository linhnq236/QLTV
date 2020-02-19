require 'test_helper'

class UsercoursesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @usercourse = usercourses(:one)
  end

  test "should get index" do
    get usercourses_url
    assert_response :success
  end

  test "should get new" do
    get new_usercourse_url
    assert_response :success
  end

  test "should create usercourse" do
    assert_difference('Usercourse.count') do
      post usercourses_url, params: { usercourse: { course_id: @usercourse.course_id, user_id: @usercourse.user_id } }
    end

    assert_redirected_to usercourse_url(Usercourse.last)
  end

  test "should show usercourse" do
    get usercourse_url(@usercourse)
    assert_response :success
  end

  test "should get edit" do
    get edit_usercourse_url(@usercourse)
    assert_response :success
  end

  test "should update usercourse" do
    patch usercourse_url(@usercourse), params: { usercourse: { course_id: @usercourse.course_id, user_id: @usercourse.user_id } }
    assert_redirected_to usercourse_url(@usercourse)
  end

  test "should destroy usercourse" do
    assert_difference('Usercourse.count', -1) do
      delete usercourse_url(@usercourse)
    end

    assert_redirected_to usercourses_url
  end
end
