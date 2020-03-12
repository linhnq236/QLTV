require "application_system_test_case"

class HistoryallsTest < ApplicationSystemTestCase
  setup do
    @historyall = historyalls(:one)
  end

  test "visiting the index" do
    visit historyalls_url
    assert_selector "h1", text: "Historyalls"
  end

  test "creating a Historyall" do
    visit historyalls_url
    click_on "New Historyall"

    fill_in "Active", with: @historyall.active
    fill_in "Staff", with: @historyall.staff_id
    fill_in "Value new", with: @historyall.value_new
    fill_in "Value old", with: @historyall.value_old
    click_on "Create Historyall"

    assert_text "Historyall was successfully created"
    click_on "Back"
  end

  test "updating a Historyall" do
    visit historyalls_url
    click_on "Edit", match: :first

    fill_in "Active", with: @historyall.active
    fill_in "Staff", with: @historyall.staff_id
    fill_in "Value new", with: @historyall.value_new
    fill_in "Value old", with: @historyall.value_old
    click_on "Update Historyall"

    assert_text "Historyall was successfully updated"
    click_on "Back"
  end

  test "destroying a Historyall" do
    visit historyalls_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Historyall was successfully destroyed"
  end
end
