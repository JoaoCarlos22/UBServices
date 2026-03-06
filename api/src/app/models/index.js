import User from "./User.js";
import UserProfile from "./UserProfile.js";
import DoctorProfile from "./DoctorProfile.js";
import AttendantProfile from "./AttendantProfile.js";
import Ubs from "./Ubs.js";
import UbsDoctor from "./UbsDoctor.js";
import UbsAttendant from "./UbsAttendant.js";
import UbsAdmin from "./UbsAdmin.js";

const models = [
	User,
	UserProfile,
	DoctorProfile,
	AttendantProfile,
	Ubs,
	UbsDoctor,
	UbsAttendant,
	UbsAdmin,
];

export {
	User,
	UserProfile,
	DoctorProfile,
	AttendantProfile,
	Ubs,
	UbsDoctor,
	UbsAttendant,
	UbsAdmin,
};

export default models;
