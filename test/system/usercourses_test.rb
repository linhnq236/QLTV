require "application_system_test_case"

class UsercoursesTest < ApplicationSystemTestCase
  setup do
    @usercourse = usercourses(:one)
  end

  test "visiting the index" do
    visit usercourses_url
    assert_selector "h1", text: "Usercourses"
  end

  test "creating a Usercourse" do
    visit usercourses_url
    click_on "New Usercourse"

    fill_in "Course", with: @usercourse.course_id
    fill_in "User", with: @usercourse.user_id
    click_on "Create Usercourse"

    assert_text "Usercourse was successfully created"
    click_on "Back"
  end

  test "updating a Usercourse" do
    visit usercourses_url
    click_on "Edit", match: :first

    fill_in "Course", with: @usercourse.course_id
    fill_in "User", with: @usercourse.user_id
    click_on "Update Usercourse"

    assert_text "Usercourse was successfully updated"
    click_on "Back"
  end

  test "destroying a Usercourse" do
    visit usercourses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Usercourse was successfully destroyed"
  end
end
