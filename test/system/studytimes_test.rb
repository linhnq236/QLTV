require "application_system_test_case"

class StudytimesTest < ApplicationSystemTestCase
  setup do
    @studytime = studytimes(:one)
  end

  test "visiting the index" do
    visit studytimes_url
    assert_selector "h1", text: "Studytimes"
  end

  test "creating a Studytime" do
    visit studytimes_url
    click_on "New Studytime"

    fill_in "Studytime", with: @studytime.studytime
    click_on "Create Studytime"

    assert_text "Studytime was successfully created"
    click_on "Back"
  end

  test "updating a Studytime" do
    visit studytimes_url
    click_on "Edit", match: :first

    fill_in "Studytime", with: @studytime.studytime
    click_on "Update Studytime"

    assert_text "Studytime was successfully updated"
    click_on "Back"
  end

  test "destroying a Studytime" do
    visit studytimes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Studytime was successfully destroyed"
  end
end
